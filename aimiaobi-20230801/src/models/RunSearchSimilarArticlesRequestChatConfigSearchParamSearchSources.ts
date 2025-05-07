// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchSimilarArticlesRequestChatConfigSearchParamSearchSources extends $dara.Model {
  /**
   * @example
   * SystemSearch
   */
  code?: string;
  datasetName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

