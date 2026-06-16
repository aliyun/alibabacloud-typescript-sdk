// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the error message returned by the operation. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * Default value: en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The sample IDs.
   * 
   * @example
   * 1,2
   */
  sampleIds?: string;
  /**
   * @remarks
   * The scenarios corresponding to the service.
   * 
   * @example
   * [\\"porn\\",\\"terrorism\\",\\"ad\\"]
   */
  scenes?: string;
  /**
   * @remarks
   * The service codes.
   * 
   * @example
   * oss
   */
  serviceCodes?: string;
  /**
   * @remarks
   * The service list.
   * 
   * @example
   * [{"serviceCode":"anti_fraud_v4_score"},{"serviceCode":"antif2_score"},{"serviceCode":"anti_fraud_customed","scenes":["TC_general_1","aliyun_cust_feat_all"]},{"serviceCode":"antif2_customed_plus","scenes":["antif2_customed_v1_feature"]}]
   */
  serviceList?: string;
  /**
   * @remarks
   * The list of service names for per-application statistics.
   * 
   * @example
   * Test
   */
  serviceNames?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * INTERNET
   */
  tab?: string;
  /**
   * @remarks
   * The task group name.
   * 
   * @example
   * TeskGroupTest
   */
  taskGroupName?: string;
  /**
   * @remarks
   * The access type.
   * 
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      sampleIds: 'SampleIds',
      scenes: 'Scenes',
      serviceCodes: 'ServiceCodes',
      serviceList: 'ServiceList',
      serviceNames: 'ServiceNames',
      tab: 'Tab',
      taskGroupName: 'TaskGroupName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      sampleIds: 'string',
      scenes: 'string',
      serviceCodes: 'string',
      serviceList: 'string',
      serviceNames: 'string',
      tab: 'string',
      taskGroupName: 'string',
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

