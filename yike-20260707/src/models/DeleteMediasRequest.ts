// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediasRequest extends $dara.Model {
  /**
   * @remarks
   * The business configuration. It is a JSON string that can contain ProductionId (the project ID).
   * 
   * @example
   * {"ProductionId":"pd_abc1234567"}
   */
  bizConfig?: string;
  /**
   * @remarks
   * Specifies whether to delete physical files at the same time.
   * 
   * @example
   * false
   */
  deletePhysicalFiles?: boolean;
  /**
   * @remarks
   * Not supported.
   */
  inputURLs?: string;
  /**
   * @remarks
   * The media asset IDs, separated by commas. Invalid IDs are added to IgnoredList.
   * 
   * @example
   * ******b48fb04483915d4f2cd8******,******c48fb37407365d4f2cd8******
   */
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      bizConfig: 'BizConfig',
      deletePhysicalFiles: 'DeletePhysicalFiles',
      inputURLs: 'InputURLs',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizConfig: 'string',
      deletePhysicalFiles: 'boolean',
      inputURLs: 'string',
      mediaIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

