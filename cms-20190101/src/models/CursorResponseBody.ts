// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CursorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Cursor is used as an input parameter for data export in the [BatchExport](https://help.aliyun.com/document_detail/2329847.html) operation.
   * 
   * @example
   * v2.5eyJiYXRjaGVzIjoxLCJidWNrZXRCeXRlcyI6IndBPT0iLCJidWNrZXRzIjo0LCJjdXJyZW50QnVja2V0IjotNjQsImN1cnJlbnRUYXJnZXRUaW1lU2xvdCI6MTY3ODc1MjAwMCwiZW5kVGltZSI6MTY3ODc4MjQxOTAwMCwiZXhwb3J0RW5kVGltZSI6MTY3ODc4MjQxOTAwMCwiZXhwb3J0U3RhcnRUaW1lIjoxNjc4NzgxODE5MDAwLCJleHByZXNzUmFuZ2UiOmZhbHNlLCJoYXNOZXh0Ijp0cnVlLCJpbmRleCI6MCwibGF0ZXN0TG9nVGltZSI6MCwibWF0Y2hlcnMiOnsiY2hhaW4iOlt7ImxhYmVsIjoidXNlcklkIiwib3BlcmF0b3IiOiJFUVVBTFMiLCJ2YWx1ZSI6IjEyNzA2NzY2Nzk1NDY3MDQifV0sImxvY2tlZCI6dHJ1ZX0sIm1ldHJpYyI6IlNwbGl0cndQcm94eU1heFJlc3BvbnNlU2l6ZSIsIm1ldHJpY1R5cGUiOiJNRVRSSUMiLCJuYW1lc3BhY2UiOiJhY3Nfa3ZzdG9yZV9leCIsIm5leHRQa0FkYXB0ZXIiOnsiZGltIjoiVjowXG5EOmB1c2VySWRgPTEyNzA2NzY2Nzk1NDY3MDQsYGluc3RhbmNlSWRgPXItcmo5ZjlzMTlsc3V1MXd1bnVyLGBub2RlSWRgPXItcmo5ZjlzMTlsc3V1MXd1bnVyLXByb3h5LTIsXG4iLCJtZXRhIjoiXG5WOjBcbk06YWNzX2t2c3RvcmVfZXgvU3BsaXRyd1Byb3h5TWF4UmVzcG9uc2VTaXplXG5XOjYwXG5COjRcbkk6LTFcblQ6MFxuQzpgQXZlcmFnZWAsYE1heGltdW1gLGBfX2NvdW50X19gLGBfX3RzX19gXG4iLCJyZCI6InN1YkFMU0RwWXY2K0t6aENQQUFBWkErNUFKMEpjbGErRGd2V0hFNWxDSHMvbGtqR2FXYTFJTkVwdFE9PSIsInRhZyI6IiJ9LCJvZmZzZXQiOjAsIm9mZnNldERpZ2l0Ijo0NTU0NTczNDQyMTc4NDIxMjIsInN0YXJ0VGltZSI6MTY3ODc4MTgxOTAwMCwic3RlcCI6LTEsInRhZ01hdGNoZXJzIjp7ImNoYWluIjpbXSwibG9ja2VkIjp0cnVlfSwidGFyZ2V0VGltZVNsb3RzIjpbMTY3ODY2NTYwMCwxNjc4NzUyMDAwXSwidXVpZCI6ImQwMmFhZmY1LWU3ZGQtNDUyYy0***********
   */
  cursor?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 915C2D7A-E6A4-17C3-8E13-4DBDD61E7919
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cursor: 'Cursor',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      cursor: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

