// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs } from "./ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs";


export class ListSchemeTaskConfigResponseBodyDataDataDataConfig extends $dara.Model {
  assignConfigs?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs;
  /**
   * @example
   * []
   */
  dataSets?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * {}
   */
  resultParam?: string;
  static names(): { [key: string]: string } {
    return {
      assignConfigs: 'AssignConfigs',
      dataSets: 'DataSets',
      index: 'Index',
      resultParam: 'ResultParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigs: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs,
      dataSets: 'string',
      index: 'number',
      resultParam: 'string',
    };
  }

  validate() {
    if(this.assignConfigs && typeof (this.assignConfigs as any).validate === 'function') {
      (this.assignConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

