// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatAiAgentRequestHitlDecisions extends $dara.Model {
  /**
   * @remarks
   * The approval decision. Valid values: approve and deny.
   * 
   * @example
   * approve
   */
  decision?: string;
  /**
   * @remarks
   * The approval item ID corresponding to the hitlPending event.
   * 
   * @example
   * -
   */
  hitlId?: string;
  static names(): { [key: string]: string } {
    return {
      decision: 'decision',
      hitlId: 'hitlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decision: 'string',
      hitlId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatAiAgentRequestRefsJobs extends $dara.Model {
  /**
   * @remarks
   * Deployment ID
   * 
   * @example
   * 2a63abb7-7ae7-4902-9970-fe5cff4bd7c1
   */
  deploymentId?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * ccb853c3-1d5a-438d-bf98-346815ad875a
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      jobId: 'jobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatAiAgentRequestRefs extends $dara.Model {
  /**
   * @remarks
   * The list of job references.
   */
  jobs?: ChatAiAgentRequestRefsJobs[];
  /**
   * @remarks
   * The list of skills to inject.
   */
  skills?: string[];
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      skills: 'skills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ChatAiAgentRequestRefsJobs },
      skills: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatAiAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Human-in-the-Loop (HITL) approval decisions, used to resume a session interrupted by a hitlPending event.
   */
  hitlDecisions?: ChatAiAgentRequestHitlDecisions[];
  /**
   * @remarks
   * The resource references, including jobs and skill lists.
   */
  refs?: ChatAiAgentRequestRefs;
  /**
   * @remarks
   * The session ID. If not specified, the server generates one. For multi-turn conversations, pass the same value across requests.
   * 
   * @example
   * 019F8CC7-EAD3-5E06-B0BF-3A2A0638B3DD-deliverData-20260723102220-VM8X0A5VZQ
   */
  sessionId?: string;
  /**
   * @remarks
   * The user natural language input. The value must be 1 to 64,000 characters in length.
   * 
   * @example
   * “”
   */
  userMessage?: string;
  static names(): { [key: string]: string } {
    return {
      hitlDecisions: 'hitlDecisions',
      refs: 'refs',
      sessionId: 'sessionId',
      userMessage: 'userMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitlDecisions: { 'type': 'array', 'itemType': ChatAiAgentRequestHitlDecisions },
      refs: ChatAiAgentRequestRefs,
      sessionId: 'string',
      userMessage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hitlDecisions)) {
      $dara.Model.validateArray(this.hitlDecisions);
    }
    if(this.refs && typeof (this.refs as any).validate === 'function') {
      (this.refs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

