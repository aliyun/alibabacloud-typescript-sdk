// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The business status of the project. You can typically ignore this parameter for standard cloud editing projects. Use this parameter to modify the project\\"s reservation status:
   * 
   * - `Reserving`: The project is being reserved.
   * 
   * - `ReservationCanceled`: The reservation for the project is canceled.
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The clip parameters for the template, in JSON format. This parameter is required if you specify `TemplateId`.<props="china"> For more information about the format, see [Create and use a standard template](https://help.aliyun.com/document_detail/328557.html) and [Create and use an advanced template](https://help.aliyun.com/document_detail/291418.html).
   * 
   * @example
   * See the template user guide.
   */
  clipsParam?: string;
  /**
   * @remarks
   * The project cover.
   * 
   * @example
   * https://****.com/6AB4D0E1E1C7446888****.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * testtimeline001desciption
   */
  description?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****4ee4b97e27b525142a6b2****
   */
  projectId?: string;
  /**
   * @remarks
   * The template ID. Use this parameter to quickly build a timeline.>Notice: You can specify only one of `ProjectId`, `Timeline`, and `TemplateId`. If you specify `TemplateId`, `ClipsParam` is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The project timeline, in JSON format.
   */
  timeline?: string;
  /**
   * @remarks
   * The project title.
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

