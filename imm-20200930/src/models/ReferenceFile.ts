// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReferenceFile extends $dara.Model {
  /**
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @example
   * 75d5de2c50754e3dadd5c35dbca5f9949369e37eb342a73821f690c94c36c7f7
   */
  objectId?: string;
  /**
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @example
   * oss://test-bucket/test-object.jpg
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

