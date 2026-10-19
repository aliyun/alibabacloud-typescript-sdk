// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiModelKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created AnalyticDB for MySQL cluster.
   * 
   * @example
   * amv-***
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The name of the created multimodal knowledge engine service.
   * 
   * @example
   * mmkb-***
   */
  mmkbName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B47EED99-BFA5-529D-8D85-A6642421D390
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      mmkbName: 'MmkbName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      mmkbName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

