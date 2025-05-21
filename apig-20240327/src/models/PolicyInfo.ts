// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Attachment } from "./Attachment";


export class PolicyInfo extends $dara.Model {
  attachments?: Attachment[];
  classAlias?: string;
  className?: string;
  config?: string;
  direction?: string;
  executePriority?: string;
  executeStage?: string;
  name?: string;
  policyId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      classAlias: 'classAlias',
      className: 'className',
      config: 'config',
      direction: 'direction',
      executePriority: 'executePriority',
      executeStage: 'executeStage',
      name: 'name',
      policyId: 'policyId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': Attachment },
      classAlias: 'string',
      className: 'string',
      config: 'string',
      direction: 'string',
      executePriority: 'string',
      executeStage: 'string',
      name: 'string',
      policyId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

