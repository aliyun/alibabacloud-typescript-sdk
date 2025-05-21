// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Attachment extends $dara.Model {
  attachResourceIds?: string[];
  attachResourceType?: string;
  environmentId?: string;
  gatewayId?: string;
  policyAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyAttachmentId: 'policyAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyAttachmentId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResourceIds)) {
      $dara.Model.validateArray(this.attachResourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

