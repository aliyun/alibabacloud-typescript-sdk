// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDIJobRequestTableMappingsSourceObjectSelectionRules } from "./CreateDijobRequestTableMappingsSourceObjectSelectionRules";
import { CreateDIJobRequestTableMappingsTransformationRules } from "./CreateDijobRequestTableMappingsTransformationRules";


export class CreateDIJobRequestTableMappings extends $dara.Model {
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  transformationRules?: CreateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsTransformationRules },
    };
  }

  validate() {
    if(Array.isArray(this.sourceObjectSelectionRules)) {
      $dara.Model.validateArray(this.sourceObjectSelectionRules);
    }
    if(Array.isArray(this.transformationRules)) {
      $dara.Model.validateArray(this.transformationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

