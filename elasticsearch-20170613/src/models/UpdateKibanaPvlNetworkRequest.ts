// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKibanaPvlNetworkRequest extends $dara.Model {
  /**
   * @example
   * es-cn-27a3mul6l00***-kibana
   */
  endpointName?: string;
  securityGroups?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * es-cn-27a3mul6l0***-kibana-internal
   */
  pvlId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointName: 'endpointName',
      securityGroups: 'securityGroups',
      pvlId: 'pvlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointName: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      pvlId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

