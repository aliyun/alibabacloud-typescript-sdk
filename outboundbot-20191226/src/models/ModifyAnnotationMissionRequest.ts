// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAnnotationMissionRequest extends $dara.Model {
  /**
   * @example
   * c88cc004-de69-4eee-aa5f-2efed533a54e
   */
  annotationMissionId?: string;
  annotationMissionName?: string;
  /**
   * @example
   * 2
   */
  annotationStatus?: number;
  /**
   * @example
   * false
   */
  delete?: boolean;
  static names(): { [key: string]: string } {
    return {
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionName: 'AnnotationMissionName',
      annotationStatus: 'AnnotationStatus',
      delete: 'Delete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionId: 'string',
      annotationMissionName: 'string',
      annotationStatus: 'number',
      delete: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

