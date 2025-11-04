// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hotword } from "./Hotword";


export class GetHotwordLibraryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the hotword library was created.
   * 
   * @example
   * 2020-12-23T13:33:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the hotword library.
   * 
   * @example
   * 热词库描述
   */
  description?: string;
  /**
   * @remarks
   * The ID of the hotword library.
   * 
   * @example
   * ****05512043f49f697f7425****
   */
  hotwordLibraryId?: string;
  /**
   * @remarks
   * The hotword list.
   */
  hotwords?: Hotword[];
  /**
   * @remarks
   * The name of the hotword library.
   * 
   * @example
   * 热词库名称
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  requestId?: string;
  /**
   * @remarks
   * The usage scenario of the hotword library.
   * 
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

