// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAISubtitleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the default subtitle template. Valid values:
   * 
   * *   true
   * 
   * *   false
   * 
   *     **
   * 
   *     **Note **The default template includes the built-in parameter configurations. You can specify the copyFrom parameter when you call the AddLiveAISubtitle operation to use the default template.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: [1,100].
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: [1,100].
   * 
   * @example
   * 100
   */
  pageSize?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the subtitle template.
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
      isDefault: 'IsDefault',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      subtitleId: 'SubtitleId',
      subtitleName: 'SubtitleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
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

