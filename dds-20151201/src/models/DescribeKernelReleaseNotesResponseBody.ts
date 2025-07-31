// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * mongodb_20180619_0.4.9
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The release notes.
   * 
   * @example
   * test release note.
   */
  releaseNote?: string;
  static names(): { [key: string]: string } {
    return {
      kernelVersion: 'KernelVersion',
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kernelVersion: 'string',
      releaseNote: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponseBodyReleaseNotes extends $dara.Model {
  releaseNote?: DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote[];
  static names(): { [key: string]: string } {
    return {
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNote: { 'type': 'array', 'itemType': DescribeKernelReleaseNotesResponseBodyReleaseNotesReleaseNote },
    };
  }

  validate() {
    if(Array.isArray(this.releaseNote)) {
      $dara.Model.validateArray(this.releaseNote);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKernelReleaseNotesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the version release notes.
   */
  releaseNotes?: DescribeKernelReleaseNotesResponseBodyReleaseNotes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F01D4DDA-CB72-4083-B399-AF4642294FE6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNotes: 'ReleaseNotes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNotes: DescribeKernelReleaseNotesResponseBodyReleaseNotes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.releaseNotes && typeof (this.releaseNotes as any).validate === 'function') {
      (this.releaseNotes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

