// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAISubtitleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the default caption templates. Valid values:
   * 
   * - true: queries the default caption templates.
   * 
   * - false: does not query the default caption templates.
   * 
   * > Default templates are built-in parameter sets. You can use them by specifying the copyFrom parameter in the AddLiveAISubtitle operation.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of templates on each page. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the caption template.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  subtitleId?: string;
  /**
   * @remarks
   * The name of the caption template. The name can contain only digits, uppercase letters, lowercase letters, and hyphens (-). The name cannot start with a hyphen.
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

