// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKibanaPvlNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint name.
   * 
   * @example
   * es-cn-text-kibana
   */
  endpointName?: string;
  /**
   * @remarks
   * The list of security groups.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * Used to ensure the idempotency of the request.
   * 
   * @example
   * xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The Kibana private network connection ID.
   * 
   * @example
   * es-cn-vo93ngti8000a****-kibana-internal-internal
   */
  pvlId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointName: 'endpointName',
      securityGroups: 'securityGroups',
      clientToken: 'clientToken',
      pvlId: 'pvlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointName: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
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

