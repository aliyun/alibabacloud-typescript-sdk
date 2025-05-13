// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the dictionary. Valid values:
   * 
   * *   IK: IK dictionary after a standard update
   * *   IK_HOT: IK dictionary after a rolling update
   * *   SYNONYMS: synonym dictionary
   * *   ALIWS: Alibaba Cloud dictionary
   * 
   * This parameter is required.
   * 
   * @example
   * IK
   */
  analyzerType?: string;
  /**
   * @remarks
   * The name of the dictionary file.
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

