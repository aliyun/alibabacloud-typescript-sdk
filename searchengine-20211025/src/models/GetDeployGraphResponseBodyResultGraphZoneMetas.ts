// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeployGraphResponseBodyResultGraphZoneMetas extends $dara.Model {
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainInfo?: string;
  /**
   * @remarks
   * The name of the Query Result Searcher (QRS) worker.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs
   */
  name?: string;
  /**
   * @remarks
   * The name of the service that is used to manage the relationships between online clusters and indexes.
   * 
   * @example
   * ha-cn-pl32rf0****_hz_pre_vpc_domain_1
   */
  suezAdminName?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * qrs
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'domainInfo',
      name: 'name',
      suezAdminName: 'suezAdminName',
      tag: 'tag',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: 'string',
      name: 'string',
      suezAdminName: 'string',
      tag: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

