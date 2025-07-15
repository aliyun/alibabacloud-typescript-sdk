// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainMultiStreamConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F486A44F-6B35-5A96-BF2C-************
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the dual-stream disaster recovery feature is enabled. Valid values:
   * 
   * *   **on**: enabled
   * *   **off**: disabled
   * 
   * @example
   * on
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      switch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

