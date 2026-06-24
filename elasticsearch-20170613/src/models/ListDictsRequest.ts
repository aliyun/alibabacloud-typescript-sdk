// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictsRequest extends $dara.Model {
  /**
   * @remarks
   * The dictionary type. Valid values:
   * 
   * - IK: IK cold update dictionary.
   * 
   * - IK_HOT: IK hot update dictionary.
   * 
   * - SYNONYMS: Synonym dictionary.
   * 
   * - ALIWS: Alibaba dictionary.
   * 
   * This parameter is required.
   * 
   * @example
   * IK
   */
  analyzerType?: string;
  /**
   * @remarks
   * The name of the file to filter.
   * 
   * @example
   * SYSTEM_MAIN.dic
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      analyzerType: 'analyzerType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzerType: 'string',
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

