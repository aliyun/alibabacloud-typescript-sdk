// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigsSearchSourceResponseConfigJqNodesJqNodesJqNodes extends $dara.Model {
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * .title
   */
  path?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      path: 'string',
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

