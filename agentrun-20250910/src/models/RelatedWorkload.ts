// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RelatedWorkload extends $dara.Model {
  workloadId?: string;
  workloadName?: string;
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      workloadId: 'workloadId',
      workloadName: 'workloadName',
      workloadType: 'workloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workloadId: 'string',
      workloadName: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

