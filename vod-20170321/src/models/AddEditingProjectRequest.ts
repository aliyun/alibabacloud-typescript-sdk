// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The thumbnail URL of the online editing project. If you leave this parameter empty and materials exist on the video track in the timeline, the thumbnail of the first material is used by default.
   * 
   * @example
   * https://demo.aliyundoc.com/6AB4D0E1E1C74468883516C2349D1FC2-6-2.png
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
   * The region in which ApsaraVideo VOD is activated.
   * 
   * @example
   * cn-shanghai
   */
  division?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * The timeline of the online editing project in JSON format. For more information about the structure, see [Timeline](https://help.aliyun.com/document_detail/52839.html).
   * 
   * If you leave this parameter empty, an empty timeline is created and the duration of the online editing project is zero.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"cc3308ac5006aed55a54328bc3443****"},{"MediaId":"95948ddba24446b6aed5db985e78****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * testtimeline
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      description: 'Description',
      division: 'Division',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      description: 'string',
      division: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
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

