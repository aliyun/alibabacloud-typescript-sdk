// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationRequestChatConfigSearchParamSearchSources extends $dara.Model {
  /**
   * @example
   * SystemSearch
   */
  code?: string;
  /**
   * @example
   * QuarkCommonNews
   */
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

