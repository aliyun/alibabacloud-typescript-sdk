// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentSpecRequestBody extends $dara.Model {
  /**
   * @remarks
   * The business tags as a JSON-formatted string.
   * 
   * @example
   * ["ai","agent"]
   */
  bizTags?: string;
  /**
   * @remarks
   * The label mapping as a JSON-formatted string.
   * 
   * @example
   * {"latest":"0.0.1"}
   */
  labels?: string;
  /**
   * @remarks
   * The visibility scope. Valid values:
   * - PUBLIC
   * - PRIVATE
   * 
   * @example
   * PUBLIC
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      bizTags: 'bizTags',
      labels: 'labels',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
      labels: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateAgentSpecRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateAgentSpecRequestBody,
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

