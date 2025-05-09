// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDIJobRequestTableMappingsSourceObjectSelectionRules } from "./UpdateDijobRequestTableMappingsSourceObjectSelectionRules";
import { UpdateDIJobRequestTableMappingsTransformationRules } from "./UpdateDijobRequestTableMappingsTransformationRules";


export class UpdateDIJobRequestTableMappings extends $dara.Model {
  /**
   * @remarks
   * The list of rules that you want to use to select synchronization objects in the source.
   */
  sourceObjectSelectionRules?: UpdateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The transformation rules that you want to apply to the synchronization objects selected from the source.
   */
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

