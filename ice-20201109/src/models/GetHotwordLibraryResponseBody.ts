// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hotword } from "./Hotword";


export class GetHotwordLibraryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time of the hotword library. The time is in ISO 8601 format and uses UTC (ending with Z).
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
   * Hotword library description
   */
  description?: string;
  /**
   * @remarks
   * The hotword library ID.
   * 
   * @example
   * ****05512043f49f697f7425****
   */
  hotwordLibraryId?: string;
  /**
   * @remarks
   * The list of hotwords.
   */
  hotwords?: Hotword[];
  /**
   * @remarks
   * The name of the hotword library.
   * 
   * @example
   * Hotword library name
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
   * @remarks
   * The scenarios of the hotword library.
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

