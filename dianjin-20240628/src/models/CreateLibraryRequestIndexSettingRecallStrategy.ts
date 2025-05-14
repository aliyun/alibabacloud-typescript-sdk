// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLibraryRequestIndexSettingRecallStrategy extends $dara.Model {
  /**
   * @example
   * model
   */
  documentRankType?: string;
  /**
   * @example
   * 20
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      documentRankType: 'documentRankType',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentRankType: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

