// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail } from "./DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail";


export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailList extends $dara.Model {
  structureInitializationDetail?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail[];
  static names(): { [key: string]: string } {
    return {
      structureInitializationDetail: 'StructureInitializationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structureInitializationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail },
    };
  }

  validate() {
    if(Array.isArray(this.structureInitializationDetail)) {
      $dara.Model.validateArray(this.structureInitializationDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

