// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hotword } from "./Hotword";


export class GetHotwordLibraryResponseBody extends $dara.Model {
  /**
   * @example
   * 2020-12-23T13:33:49Z
   */
  creationTime?: string;
  /**
   * @example
   * 热词库描述
   */
  description?: string;
  /**
   * @example
   * ****05512043f49f697f7425****
   */
  hotwordLibraryId?: string;
  hotwords?: Hotword[];
  /**
   * @example
   * 热词库名称
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****12e8864746a0a398****
   */
  requestId?: string;
  /**
   * @example
   * ASR
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      hotwordLibraryId: 'HotwordLibraryId',
      hotwords: 'Hotwords',
      name: 'Name',
      requestId: 'RequestId',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      hotwordLibraryId: 'string',
      hotwords: { 'type': 'array', 'itemType': Hotword },
      name: 'string',
      requestId: 'string',
      usageScenario: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hotwords)) {
      $dara.Model.validateArray(this.hotwords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

