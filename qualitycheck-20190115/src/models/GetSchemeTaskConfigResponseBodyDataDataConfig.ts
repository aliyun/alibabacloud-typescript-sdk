// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs } from "./GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs";


export class GetSchemeTaskConfigResponseBodyDataDataConfig extends $dara.Model {
  assignConfigs?: GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs[];
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
      assignConfigs: { 'type': 'array', 'itemType': GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigs },
      dataSets: 'string',
      index: 'number',
      resultParam: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignConfigs)) {
      $dara.Model.validateArray(this.assignConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

