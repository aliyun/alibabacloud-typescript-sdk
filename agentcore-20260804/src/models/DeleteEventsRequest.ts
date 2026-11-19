// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventsRequestBodyScope extends $dara.Model {
  /**
   * @remarks
   * The business agent ID.
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * The ID of the precisely located session.
   * 
   * This parameter is required.
   * 
   * @example
   * session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The business team ID.
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * The business user ID. This is not the platform tenant identity.
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      sessionId: 'sessionId',
      teamId: 'teamId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      sessionId: 'string',
      teamId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventsRequestBody extends $dara.Model {
  /**
   * @remarks
   * A list of 1 to 100 unique event IDs. Only events owned by the current session are deleted.
   * 
   * This parameter is required.
   */
  eventIds?: string[];
  /**
   * @remarks
   * The scope for precise session location.
   * 
   * This parameter is required.
   */
  scope?: DeleteEventsRequestBodyScope;
  static names(): { [key: string]: string } {
    return {
      eventIds: 'eventIds',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventIds: { 'type': 'array', 'itemType': 'string' },
      scope: DeleteEventsRequestBodyScope,
    };
  }

  validate() {
    if(Array.isArray(this.eventIds)) {
      $dara.Model.validateArray(this.eventIds);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON request body.
   * 
   * This parameter is required.
   */
  body?: DeleteEventsRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DeleteEventsRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

