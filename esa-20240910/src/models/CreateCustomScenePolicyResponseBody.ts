// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomScenePolicyResponseBody extends $dara.Model {
  endTime?: string;
  name?: string;
  objects?: string[];
  policyId?: number;
  requestId?: string;
  siteIds?: string;
  startTime?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      requestId: 'RequestId',
      siteIds: 'SiteIds',
      startTime: 'StartTime',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
      policyId: 'number',
      requestId: 'string',
      siteIds: 'string',
      startTime: 'string',
      template: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

