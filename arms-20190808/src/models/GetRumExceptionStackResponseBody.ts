// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumExceptionStackResponseBodyDataThreadInfoList extends $dara.Model {
  /**
   * @remarks
   * Thread stack details.
   * 
   * @example
   * "0  libsystem_platform.dylib + 0x1ab5\\n    rax = 0x0000000000000001   rdx = 0x0000000000000064\\n    rcx = 0xffffffffffffffff   rbx = 0x0000000107701bd0\\n    rsi = 0x0101010101010101   rdi = 0x0000000000000001\\n    rbp = 0x00007ff7b8d64300   rsp = 0x00007ff7b8d64300\\n     r8 = 0x000000000000000a    r9 = 0x0000000000000000\\n    r10 = 0x0000000000000001   r11 = 0x0000000000000247\\n    r12 = 0x00007ff7b8d64390   r13 = 0x0000000000000000\\n    r14 = 0x000000010719d770   r15 = 0x00007ff7b8d64500\\n    rip = 0x00007ff807a40ab5\\n    Found by: given as instruction pointer in context\\n 1  alibabacloud_rum_example + 0x2ad1\\n    rbp = 0x00007ff7b8d64310   rsp = 0x00007ff7b8d64310\\n    rip = 0x000000010719dad1\\n    Found by: previous frame\\"s frame pointer\\n 2  alibabacloud_rum_example + 0x2a3b\\n    rbp = 0x00007ff7b8d64360   rsp = 0x00007ff7b8d64320\\n    rip = 0x000000010719da3b\\n    Found by: previous frame\\"s frame pointer\\n 3  0x7ff807688345\\n    rbp = 0x00007ff7b8d64580   rsp = 0x00007ff7b8d64370\\n    rip = 0x00007ff807688345\\n    Found by: previous frame\\"s frame pointer"
   */
  threadDetail?: string;
  /**
   * @remarks
   * The thread tag, including the thread number and name.
   * 
   * @example
   * Thread 0 (crashed)
   */
  threadTag?: string;
  static names(): { [key: string]: string } {
    return {
      threadDetail: 'ThreadDetail',
      threadTag: 'ThreadTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threadDetail: 'string',
      threadTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumExceptionStackResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name and UUID of the symbol table required for parsing the exception stack. This parameter is exposed during the parsing of PC errors.
   * 
   * @example
   * "04B5B216682E40BF9BBE9698E3F98CAA0,libcurl.4.dylib;7878DB3CF21A3C13A203B7E3B0FA66250,libalibabacloud_rum.dylib;0F9F96FE6B1C3253A33AC9E4A0C2A3860,libsystem_kernel.dylib;3DF3256F466E37BCB995A5A9956E14150,libsystem_pthread.dylib;000000000000000000000000000000000,Security;EA4B83A319EB3E15B22CDF035DBD49250,alibabacloud_rum_example;710BB12EEEC744BAB41D1849CA3AD8021,LTSDK.pdb;EE330BA9C49E4730AA15A2B7C0BB2CAE1,JBLive.pdb"
   */
  binaryImages?: string;
  /**
   * @remarks
   * The crash address. This parameter is exposed during the parsing of PC errors.
   * 
   * @example
   * 0x1
   */
  crashAddress?: string;
  /**
   * @remarks
   * The cause of the exception. This parameter is exposed during the parsing of PC errors.
   * 
   * @example
   * EXC_BAD_ACCESS / KERN_INVALID_ADDRESS
   */
  crashReason?: string;
  /**
   * @remarks
   * The list of stacks.
   */
  lines?: string[];
  /**
   * @remarks
   * The name of the crash parsing module. This parameter is exposed during the parsing of PC errors.
   * 
   * @example
   * alibabacloud_rum_example
   */
  moduleName?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * 16643
   */
  threadId?: string;
  /**
   * @remarks
   * The thread stack information captured during PC crashes.
   */
  threadInfoList?: GetRumExceptionStackResponseBodyDataThreadInfoList[];
  /**
   * @remarks
   * The UUID of the symbol table required for parsing the stack. This parameter is exposed during the parsing of PC errors.
   * 
   * @example
   * 9032259CEB9130E780C6DE8FDECCD7990
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      binaryImages: 'BinaryImages',
      crashAddress: 'CrashAddress',
      crashReason: 'CrashReason',
      lines: 'Lines',
      moduleName: 'ModuleName',
      threadId: 'ThreadId',
      threadInfoList: 'ThreadInfoList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binaryImages: 'string',
      crashAddress: 'string',
      crashReason: 'string',
      lines: { 'type': 'array', 'itemType': 'string' },
      moduleName: 'string',
      threadId: 'string',
      threadInfoList: { 'type': 'array', 'itemType': GetRumExceptionStackResponseBodyDataThreadInfoList },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lines)) {
      $dara.Model.validateArray(this.lines);
    }
    if(Array.isArray(this.threadInfoList)) {
      $dara.Model.validateArray(this.threadInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumExceptionStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   */
  data?: GetRumExceptionStackResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal error. Please try again. Contact the DingTalk service account if the issue                              persists after multiple retries.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * B6A00968-82A8-4F14-9D1B-B53827DB****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRumExceptionStackResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

