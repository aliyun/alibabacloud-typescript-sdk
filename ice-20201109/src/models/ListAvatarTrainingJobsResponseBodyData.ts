// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAvatarTrainingJobsResponseBodyDataAvatarTrainingJobList } from "./ListAvatarTrainingJobsResponseBodyDataAvatarTrainingJobList";


export class ListAvatarTrainingJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of digital human training jobs.
   */
  avatarTrainingJobList?: ListAvatarTrainingJobsResponseBodyDataAvatarTrainingJobList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      avatarTrainingJobList: 'AvatarTrainingJobList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarTrainingJobList: { 'type': 'array', 'itemType': ListAvatarTrainingJobsResponseBodyDataAvatarTrainingJobList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.avatarTrainingJobList)) {
      $dara.Model.validateArray(this.avatarTrainingJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

