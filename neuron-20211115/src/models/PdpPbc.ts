// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpPbc extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 基础商品
   */
  alias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 多端商城
   */
  company?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @example
   * 基础商品描述
   */
  description?: string;
  /**
   * @example
   * 1
   */
  developerId?: string;
  /**
   * @example
   * neuron-pdp-pbc
   */
  gitGroup?: string;
  /**
   * @example
   * {"path":"neuron-pdp-pbc","webUrl":"https://codeup.aliyun.com/616d751bbc23ecd311af9711/neuron-pdp-pbc","name":"neuron-pdp-pbc","id":480037,"ownerId":663171,"pathWithNamespace":"616d751bbc23ecd311af9711/neuron-pdp-pbc","parentId":330007}
   */
  gitGroupInfo?: string;
  /**
   * @example
   * 2022-05-01T00:00:00.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * product
   */
  name?: string;
  requestId?: string;
  snowbergDisplay?: boolean;
  /**
   * @example
   * INNER
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      company: 'company',
      companyId: 'companyId',
      description: 'description',
      developerId: 'developerId',
      gitGroup: 'gitGroup',
      gitGroupInfo: 'gitGroupInfo',
      gmtCreate: 'gmtCreate',
      id: 'id',
      name: 'name',
      requestId: 'requestId',
      snowbergDisplay: 'snowbergDisplay',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      company: 'string',
      companyId: 'number',
      description: 'string',
      developerId: 'string',
      gitGroup: 'string',
      gitGroupInfo: 'string',
      gmtCreate: 'string',
      id: 'number',
      name: 'string',
      requestId: 'string',
      snowbergDisplay: 'boolean',
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

