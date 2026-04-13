// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCandidateInstanceTypeResponseBody extends $dara.Model {
  candidateInstanceTypes?: string[];
  candidateZoneIds?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      candidateInstanceTypes: 'CandidateInstanceTypes',
      candidateZoneIds: 'CandidateZoneIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      candidateZoneIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.candidateInstanceTypes)) {
      $dara.Model.validateArray(this.candidateInstanceTypes);
    }
    if(Array.isArray(this.candidateZoneIds)) {
      $dara.Model.validateArray(this.candidateZoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

