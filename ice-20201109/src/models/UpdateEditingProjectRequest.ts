// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The business status of the project. This parameter can be ignored for general editing projects. Valid values:
   * 
   * *   Reserving
   * *   ReservationCanceled
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The material parameter corresponding to the template, in the JSON format. If TemplateId is specified, ClipsParam must also be specified.
   */
  clipsParam?: string;
  /**
   * @remarks
   * The thumbnail URL of the online editing project.
   * 
   * @example
   * https://****.com/6AB4D0E1E1C7446888****.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the online editing project.
   * 
   * @example
   * testtimeline001desciption
   */
  description?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * ****4ee4b97e27b525142a6b2****
   */
  projectId?: string;
  /**
   * @remarks
   * The template ID. This parameter is used to quickly build a timeline with ease. Note: Only one of ProjectId, Timeline, and TemplateId can be specified. If TemplateId is specified, ClipsParam must also be specified.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  timeline?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * @example
   * testtimeline
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      clipsParam: 'ClipsParam',
      coverURL: 'CoverURL',
      description: 'Description',
      projectId: 'ProjectId',
      templateId: 'TemplateId',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      clipsParam: 'string',
      coverURL: 'string',
      description: 'string',
      projectId: 'string',
      templateId: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

