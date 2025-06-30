// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDIJobRequestTableMappingsSourceObjectSelectionRules } from "./UpdateDijobRequestTableMappingsSourceObjectSelectionRules";
import { UpdateDIJobRequestTableMappingsTransformationRules } from "./UpdateDijobRequestTableMappingsTransformationRules";


export class UpdateDIJobRequestTableMappings extends $dara.Model {
  sourceObjectSelectionRules?: UpdateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  transformationRules?: UpdateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': UpdateDIJobRequestTableMappingsTransformationRules },
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

