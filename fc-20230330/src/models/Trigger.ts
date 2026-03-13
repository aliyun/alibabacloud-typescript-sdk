// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HTTPTrigger } from "./Httptrigger";


export class Trigger extends $dara.Model {
  /**
   * @remarks
   * The time when the trigger was created.
   * 
   * @example
   * 2020-08-20T02:28:21Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the trigger.
   * 
   * @example
   * test_description
   */
  description?: string;
  /**
   * @remarks
   * The information about the HTTP trigger.
   */
  httpTrigger?: HTTPTrigger;
  /**
   * @remarks
   * The role that is used by the event source such as OSS to invoke the function.
   * 
   * @example
   * acs:ram::151641468453****:role/my-role
   */
  invocationRole?: string;
  /**
   * @remarks
   * The time when the trigger was last modified.
   * 
   * @example
   * 2020-04-23T06:32:43Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event source for the trigger.
   * 
   * @example
   * acs:oss:cn-hangzhou:151641468453****:my-bucket
   */
  sourceArn?: string;
  /**
   * @remarks
   * The status of the trigger.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The ARN of the function.
   * 
   * @example
   * acs:oss:cn-hangzhou:151641468453****:my-bucket
   */
  targetArn?: string;
  /**
   * @remarks
   * The configurations of the trigger. The configurations vary based on trigger types.
   * 
   * @example
   * {
   *       "events": [
   *             "oss:ObjectCreated:*"
   *       ],
   *       "filter": {
   *             "key": {
   *                   "prefix": "/prefix",
   *                   "suffix": ".zip"
   *             }
   *       }
   * }
   */
  triggerConfig?: string;
  /**
   * @remarks
   * The unique ID of the trigger.
   * 
   * @example
   * 546959b5-ce1a-4991-8891-df7a02b25086
   */
  triggerId?: string;
  /**
   * @remarks
   * The name of the trigger. The name contains only letters, digits, hyphens (-), and underscores (_). The name must be 1 to 128 characters in length and cannot start with a digit or hyphen (-).
   * 
   * @example
   * defaultTrigger
   */
  triggerName?: string;
  /**
   * @remarks
   * The type of the trigger.
   * 
   * @example
   * http
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      httpTrigger: 'httpTrigger',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      status: 'status',
      targetArn: 'targetArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      httpTrigger: HTTPTrigger,
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      status: 'string',
      targetArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(this.httpTrigger && typeof (this.httpTrigger as any).validate === 'function') {
      (this.httpTrigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

