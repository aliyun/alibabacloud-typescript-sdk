// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextRequest extends $dara.Model {
  /**
   * @example
   * Users prefer to first view the SLS error logs, index configuration, and the most recent Agent execution trace.
   */
  content?: string;
  /**
   * @example
   * {
   * 	"taskType": "troubleshooting",
   * 	"complexity": "medium",
   * 	"confidence": 0.95
   * }
   */
  experience?: { [key: string]: any };
  /**
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * {
   *     "userId": "u-10001",
   *     "agentId": "sls-agent",
   *     "appId": "console",
   *     "categories": [
   *       "preference"
   *     ],
   *     "source": "user_confirmed",
   *     "topic": "debugging_preference",
   *     "immutable": false,
   *     "createdAt": 1776319200,
   *     "updatedAt": 1776319200
   *   }
   */
  payload?: { [key: string]: any };
  /**
   * @example
   * Identify and troubleshoot SLs issues
   */
  triggerCondition?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      experience: 'experience',
      metadata: 'metadata',
      payload: 'payload',
      triggerCondition: 'triggerCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      experience: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      payload: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      triggerCondition: 'string',
    };
  }

  validate() {
    if(this.experience) {
      $dara.Model.validateMap(this.experience);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.payload) {
      $dara.Model.validateMap(this.payload);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

