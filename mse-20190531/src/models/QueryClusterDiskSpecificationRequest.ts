// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterDiskSpecificationRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The type of the instance. Valid values: ZooKeeper, Nacos-Ans, and Eureka.
   * 
   * @example
   * ZooKeeper
   */
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterType: 'ClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

