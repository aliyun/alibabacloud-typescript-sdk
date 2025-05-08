// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNCInformationRequest extends $dara.Model {
  ensRegionId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

