// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HTTPTrigger } from "./Httptrigger";


export class Trigger extends $dara.Model {
  createdTime?: string;
  description?: string;
  httpTrigger?: HTTPTrigger;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  status?: string;
  targetArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
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

