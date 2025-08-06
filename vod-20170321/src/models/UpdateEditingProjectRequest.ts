// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEditingProjectRequest extends $dara.Model {
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
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * 4ee4b97e27*****b525142a6b2
   */
  projectId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * The timeline of the online editing project. For more information about the structure, see [Timeline](https://help.aliyun.com/document_detail/52839.html).
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"cc3308ac500c*****a54328bc3443"},{"MediaId":"da87a9cff64*****d88bc6d8326e4"}]}]}
   */
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
      coverURL: 'CoverURL',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
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
      ownerAccount: 'string',
      ownerId: 'string',
      projectId: 'string',
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

