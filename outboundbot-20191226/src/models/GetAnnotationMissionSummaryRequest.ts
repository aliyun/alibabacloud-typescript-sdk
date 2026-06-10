// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnnotationMissionSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the annotation task.
   * 
   * @example
   * 50e53ac8-24a4-46d5-b174-ee88867f4780
   */
  annotationMissionId?: string;
  static names(): { [key: string]: string } {
    return {
      annotationMissionId: 'AnnotationMissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

