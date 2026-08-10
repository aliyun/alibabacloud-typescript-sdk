// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The business status of the project. This parameter can be ignored for general editing projects. You can modify the reservation status of the project. Valid values:
   * 
   * - Reserving: The project is being reserved.
   * - ReservationCanceled: The reservation is canceled.
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The material parameters for the template in JSON format. If TemplateId is specified, ClipsParam must also be specified.<props="china">For more information about the format, see [Create and use a common template](https://help.aliyun.com/document_detail/328557.html) and [Create and use an advanced template](https://help.aliyun.com/document_detail/291418.html).
   * 
   * @example
   * See the template user guide.
   */
  clipsParam?: string;
  /**
   * @remarks
   * The cover URL of the cloud editing project.
   * 
   * @example
   * https://****.com/6AB4D0E1E1C7446888****.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The description of the cloud editing project.
   * 
   * @example
   * testtimeline001desciption
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * ****4ee4b97e27b525142a6b2****
   */
  projectId?: string;
  /**
   * @remarks
   * The template ID, which is used to quickly build a timeline with minimal effort.>Notice: Exactly one of ProjectId, Timeline, and TemplateId must be specified. If TemplateId is specified, ClipsParam must also be specified.
   * 
   * @example
   * ****96e8864746a0b6f3****
   */
  templateId?: string;
  /**
   * @remarks
   * The timeline of the cloud editing project in JSON format.
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the cloud editing project.
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

