// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAnnotationMissionRequest extends $dara.Model {
  /**
   * @remarks
   * The annotation task ID.
   * 
   * @example
   * c88cc004-de69-4eee-aa5f-2efed533a54e
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The annotation task name.
   * 
   * @example
   * AskAboutSellingCar-AnnotationTask-20230506-112934
   */
  annotationMissionName?: string;
  /**
   * @remarks
   * The annotation task status.
   * 
   * @example
   * 2
   */
  annotationStatus?: number;
  /**
   * @remarks
   * Specifies whether to delete the task.
   * 
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

