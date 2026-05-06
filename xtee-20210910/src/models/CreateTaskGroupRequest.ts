// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskGroupRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @example
   * 1,2
   */
  sampleIds?: string;
  /**
   * @example
   * [\\"porn\\",\\"terrorism\\",\\"ad\\"]
   */
  scenes?: string;
  /**
   * @example
   * oss
   */
  serviceCodes?: string;
  /**
   * @example
   * Test
   */
  serviceNames?: string;
  /**
   * @example
   * INTERNET
   */
  tab?: string;
  /**
   * @example
   * TeskGroupTest
   */
  taskGroupName?: string;
  /**
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

