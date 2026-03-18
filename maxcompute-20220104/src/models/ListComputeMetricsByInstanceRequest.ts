// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeMetricsByInstanceRequest extends $dara.Model {
  endDate?: number;
  instanceId?: string;
  jobOwner?: string;
  pageNumber?: number;
  pageSize?: number;
  projectNames?: string[];
  region?: string;
  signature?: string;
  specCodes?: string[];
  startDate?: number;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectNames: 'projectNames',
      region: 'region',
      signature: 'signature',
      specCodes: 'specCodes',
      startDate: 'startDate',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectNames: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      signature: 'string',
      specCodes: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectNames)) {
      $dara.Model.validateArray(this.projectNames);
    }
    if(Array.isArray(this.specCodes)) {
      $dara.Model.validateArray(this.specCodes);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

