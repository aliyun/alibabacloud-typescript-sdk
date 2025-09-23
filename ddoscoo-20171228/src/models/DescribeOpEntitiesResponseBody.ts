// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpEntitiesResponseBodyOpEntities extends $dara.Model {
  /**
   * @example
   * 2.2.2.2
   */
  entityObject?: string;
  /**
   * @example
   * 1
   */
  entityType?: number;
  /**
   * @example
   * 1536715558000
   */
  gmtCreate?: number;
  /**
   * @example
   * 123
   */
  opAccount?: string;
  /**
   * @example
   * 1
   */
  opAction?: number;
  /**
   * @example
   * {"newEntity":{"elasticBandwidth":30},"oldEntity":{"elasticBandwidth":200}}
   */
  opDesc?: string;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBody extends $dara.Model {
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      opEntities: 'OpEntities',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.opEntities)) {
      $dara.Model.validateArray(this.opEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

