// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available elastic AnalyticDB compute units (ACUs).
   * 
   * @example
   * 512ACU
   */
  elasticACU?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0322C7FB-4584-5D2A-BF7F-F9036E940C35
   */
  requestId?: string;
  /**
   * @remarks
   * The available reserved computing resources.
   * 
   * @example
   * 48ACU
   */
  reserverdCompteACU?: string;
  /**
   * @remarks
   * The available reserved storage resources.
   * 
   * @example
   * 24ACU
   */
  reserverdStorageACU?: string;
  /**
   * @remarks
   * The number of available resource groups.
   * 
   * @example
   * 10
   */
  resourceGroupCount?: string;
  static names(): { [key: string]: string } {
    return {
      elasticACU: 'ElasticACU',
      requestId: 'RequestId',
      reserverdCompteACU: 'ReserverdCompteACU',
      reserverdStorageACU: 'ReserverdStorageACU',
      resourceGroupCount: 'ResourceGroupCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticACU: 'string',
      requestId: 'string',
      reserverdCompteACU: 'string',
      reserverdStorageACU: 'string',
      resourceGroupCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

