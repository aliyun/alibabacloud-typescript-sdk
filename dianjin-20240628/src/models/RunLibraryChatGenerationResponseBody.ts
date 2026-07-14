// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLibraryChatGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time consumed.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data (non-streaming).
   * 
   * @example
   * {
   *     "finish":true,
   *     "text":"是的，记名预付卡的有效期不得低于3年。",
   *     "message": "是的，记名预付卡的有效期不得低于3年。",
   *     "queryResult":{
   *       "errCode": "0",	//接口协议层面的错误码，正常为0，未授权，参数错误，服务器异常时会发生变化，可以忽略不处理
   *       "message": "ok",	//接口协议层面的消息
   *       "data":{
   *         "success": true,	//有回答true 无回答false
   *         "answer": null,	//大模型生成的回答结果
   *         "embeddingElapsedMs": 127,
   *         "vectorSearchElapsedMs": 2745,
   *         "llmElapsedMs": 7911,
   *         "totalElapsedMs": 10820,
   *         "chunks": [	//召回的分块信息，一般为top5或top10，可联系我们调整效果
   *           {
   *             "chunkId": "470182177892469799",	//分块信息的编号
   *             "docId": "22666332",	//分块关联的文档编号
   *             "chunkText": "Profits plummeted in the first quarter, can\\"t you bear it? In fact, previous rounds of price cuts have indeed had a certain impact on Tesla\\"s financial data. Tesla has just released its financial report for the first quarter of this year. The data shows that in Q1 2023, Tesla achieved revenue of 23.33 billion US dollars, an increase of 24% over the previous year; Tesla delivered more than 422,000 electric vehicles worldwide in the first quarter, an increase of 36% over the previous year",	//新闻原始内容
   *             "chunkMeta": {	// demo数据中的其他metadata
   *               "language": "en",
   *               "unique_id": "news_22666332_13",
   *               "content_type": "news",
   *               "stock_id_list": []
   *             }
   *           }],
   *         "documents": [{
   *           "docId": "1686637056086872065",	//文档编号
   *           "gmtCreate": "2023-08-02 15:16:25",	//文档的创建时间
   *           "libraryId": "a1b2c3",	//文档关联的知识库编号
   *           "title": "2023年工银信用卡微信、京东绑卡消费累计积分活动",	//文档标题
   *           "url": null	//文档连接，如有
   *         }]	//块文本关联的文档
   *       },
   *       "success": true	//接口协议层面的成功/失败状态 true就是errCode为0
   *     }
   *   }
   */
  data?: any;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: 'any',
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

