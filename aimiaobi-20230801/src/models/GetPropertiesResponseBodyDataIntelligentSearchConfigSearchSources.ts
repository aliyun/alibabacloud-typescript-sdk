// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  /**
   * @example
   * xx
   */
  datasetName?: string;
  /**
   * @example
   * xx
   */
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

