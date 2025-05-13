// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RestartInstanceResponseBodyResultDictList } from "./RestartInstanceResponseBodyResultDictList";
import { RestartInstanceResponseBodyResultKibanaConfiguration } from "./RestartInstanceResponseBodyResultKibanaConfiguration";
import { RestartInstanceResponseBodyResultMasterConfiguration } from "./RestartInstanceResponseBodyResultMasterConfiguration";
import { RestartInstanceResponseBodyResultNetworkConfig } from "./RestartInstanceResponseBodyResultNetworkConfig";
import { RestartInstanceResponseBodyResultNodeSpec } from "./RestartInstanceResponseBodyResultNodeSpec";
import { RestartInstanceResponseBodyResultSynonymsDicts } from "./RestartInstanceResponseBodyResultSynonymsDicts";


export class RestartInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2020-07-06T10:18:48.662Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * es-cn-abc
   */
  description?: string;
  /**
   * @remarks
   * The configuration of the IK dictionaries.
   */
  dictList?: RestartInstanceResponseBodyResultDictList[];
  /**
   * @remarks
   * The intranet access address of the instance.
   * 
   * @example
   * es-cn-nif1q8auz0003****.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * 6.7.0_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration of Kibana nodes.
   */
  kibanaConfiguration?: RestartInstanceResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The public network access address of Kibana.
   * 
   * @example
   * es-cn-nif1q8auz0003****.kibana.elasticsearch.aliyuncs.com
   */
  kibanaDomain?: string;
  /**
   * @remarks
   * The public port of the Kibana network.
   * 
   * @example
   * 5601
   */
  kibanaPort?: number;
  /**
   * @remarks
   * The configuration of dedicated master nodes.
   */
  masterConfiguration?: RestartInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The network configuration.
   */
  networkConfig?: RestartInstanceResponseBodyResultNetworkConfig;
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The configuration of data nodes.
   */
  nodeSpec?: RestartInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The billing method of the created ECS instance.
   * 
   * Valid values: prepaid and postpaid.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The public network access address.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****.public.elasticsearch.aliyuncs.com
   */
  publicDomain?: string;
  /**
   * @remarks
   * The public network port.
   * 
   * @example
   * 9200
   */
  publicPort?: number;
  /**
   * @remarks
   * The state of the cluster.
   * 
   * Supported: active (normal), activating (initializing), inactive (blocked), and invalid (expired).
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The configuration of the synonym dictionaries.
   */
  synonymsDicts?: RestartInstanceResponseBodyResultSynonymsDicts[];
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 2018-07-18T10:10:04.484Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      dictList: 'dictList',
      domain: 'domain',
      esVersion: 'esVersion',
      instanceId: 'instanceId',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaDomain: 'kibanaDomain',
      kibanaPort: 'kibanaPort',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      publicDomain: 'publicDomain',
      publicPort: 'publicPort',
      status: 'status',
      synonymsDicts: 'synonymsDicts',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      dictList: { 'type': 'array', 'itemType': RestartInstanceResponseBodyResultDictList },
      domain: 'string',
      esVersion: 'string',
      instanceId: 'string',
      kibanaConfiguration: RestartInstanceResponseBodyResultKibanaConfiguration,
      kibanaDomain: 'string',
      kibanaPort: 'number',
      masterConfiguration: RestartInstanceResponseBodyResultMasterConfiguration,
      networkConfig: RestartInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: RestartInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      publicDomain: 'string',
      publicPort: 'number',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': RestartInstanceResponseBodyResultSynonymsDicts },
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dictList)) {
      $dara.Model.validateArray(this.dictList);
    }
    if(this.kibanaConfiguration && typeof (this.kibanaConfiguration as any).validate === 'function') {
      (this.kibanaConfiguration as any).validate();
    }
    if(this.masterConfiguration && typeof (this.masterConfiguration as any).validate === 'function') {
      (this.masterConfiguration as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    if(Array.isArray(this.synonymsDicts)) {
      $dara.Model.validateArray(this.synonymsDicts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

