// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecycleBinAttributeResponseBodyRecycleBinAttribute extends $dara.Model {
  /**
   * @remarks
   * The size of the archived data that is dumped to the recycle bin. Unit: bytes.
   * 
   * @example
   * 1611661312
   */
  archiveSize?: number;
  /**
   * @remarks
   * The time at which the recycle bin was enabled.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  enableTime?: string;
  /**
   * @remarks
   * The retention period of the files in the recycle bin. Unit: days.
   * 
   * If the recycle bin is disabled, 0 is returned for this parameter.
   * 
   * @example
   * 0
   */
  reservedDays?: number;
  /**
   * @remarks
   * The size of the Infrequent Access (IA) data that is dumped to the recycle bin. Unit: bytes.
   * 
   * @example
   * 100
   */
  secondarySize?: number;
  /**
   * @remarks
   * The size of the files that are dumped to the recycle bin. Unit: bytes.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The status of the recycle bin.
   * 
   * Valid values:
   * 
   * *   Enable: The recycle bin is enabled.
   * *   Disable: The recycle bin is disabled.
   * 
   * @example
   * Disable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      archiveSize: 'ArchiveSize',
      enableTime: 'EnableTime',
      reservedDays: 'ReservedDays',
      secondarySize: 'SecondarySize',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveSize: 'number',
      enableTime: 'string',
      reservedDays: 'number',
      secondarySize: 'number',
      size: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecycleBinAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the recycle bin.
   */
  recycleBinAttribute?: GetRecycleBinAttributeResponseBodyRecycleBinAttribute;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recycleBinAttribute: 'RecycleBinAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recycleBinAttribute: GetRecycleBinAttributeResponseBodyRecycleBinAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recycleBinAttribute && typeof (this.recycleBinAttribute as any).validate === 'function') {
      (this.recycleBinAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

