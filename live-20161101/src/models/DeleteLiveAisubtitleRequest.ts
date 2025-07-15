// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveAISubtitleRequest extends $dara.Model {
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the subtitle template.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  subtitleId?: string;
  /**
   * @remarks
   * The name of the subtitle template. The name can contain only digits, letters, and hyphens (-). The name cannot start with a hyphen.
   * 
   * @example
   * sub01
   */
  subtitleName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      subtitleId: 'SubtitleId',
      subtitleName: 'SubtitleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      subtitleId: 'string',
      subtitleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

